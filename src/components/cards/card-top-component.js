import React from 'react'
import Avatar from '../avatar'
import ReactStars from 'react-stars'
import { FaFire, FaHandHoldingHeart, FaHourglass, FaMedal } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import { Link } from 'gatsby'

export default function CardTopComponent({data, avatarHeight = 120, avaterWidth = 120, avatarTop = '-60px', isSnippet= false}) {
    const {uid, Name, Rating, Degree, Speciality, Designation, Institute, Fee, Interest, Biography, Badges} = data
  return (
    <div className={Rating > 4.5 ? 'bg-warning p-2' : 'bg-light p-2'} style={isSnippet ? {position: 'relative', width: '380px' } : {position: 'relative' }}>
            <div className='d-flex justify-content-start align-items-center'>
                <div style={{ position: "absolute", top: avatarTop}}>
                    <Avatar height={avatarHeight} width={avaterWidth} img={uid} className='rounded-circle shadow' />
                </div>
                <div className='' style={{marginLeft: "130px"}}>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '700'}}>{Name}</p>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '500'}}>{`${Speciality} Specialist`}</p>
                    {Interest && <p className='mb-0' style={{color: '#535352', fontWeight: '400', fontSize: ".8rem"}}>{Interest.replace(/\*/g, ",")}</p>}
                </div>
                
            </div>
            <div className='ml-3 mt-2'>
                <div className='d-flex justify-content-start'>
                    <div>
                        <div className='d-flex justify-content-start'>
                        <ReactStars count={Rating} size={18} half={true} color1='#0c7a2b'/>
                        <p className='ml-1 mb-0' style={{color: ' #0c7a2b'}}>({Rating})</p>
                        </div>
                        <div style={{color: '#535352', fontWeight: '600', fontSize: ".7rem"}}>
                            {Fee && 'Fee: ' + Fee + ' Taka'}
                        </div>
                    </div>
                    <div className='ml-3 d-flex'>
                        <ClinicalBadge badges={Badges} />                 
                    </div>
                </div>
                <hr />
                <div className='pr-3' style={{fontSize: ".8rem"}}>
                    <p className='mb-0'>{Degree.replace(/\*/g, ",")}</p>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '500'}}>{`${Designation.replace(/\*/g, ",")} at ${Institute.replace(/\*/g, ",")}`}</p>
                    <p className='text-justify'>{Biography}</p>
                </div>
                {isSnippet && <Link to={`/doctor/${data.fields.slug}/`} className="btn d-block bg-light p-0">
                    Details
                </Link>}
            </div>
        </div>
  )
}

/*
Badges: Topper*Popular*Busy*Trusted
*/

function ClinicalBadge({badges}){
    
    function badgeFilter(key){

        switch (key) {
            case 0:
                return [<FaMedal color='orange' />, 'Topper']
            
            case 1:
                return [<FaFire color='red' />, 'Popular']
            case 2:
                return [<FaHourglass color='gray' />, 'Busy']
            case 3:
                return [<FaHandHoldingHeart color='green' />, 'Trusted']     
        
            default:
                return <></>
        }
    }
    
    return (
        <> 
            {
                badges.split('*').map( (isEarned, num) => {
                    if (parseInt(isEarned) === 0) return <></>
                    let badgeFiltered = badgeFilter(num);
                    return <div className='d-flex flex-column justify-content-center align-items-center'>
                        <span className='d-flex justify-content-center align-items-center bg-light rounded-circle' style={{width: '24px', height: '24px'}}>{badgeFiltered[0]}</span>
                        <Badge variant='pill'>{badgeFiltered[1]}</Badge>  
                    </div>
                })
            }  
        </>
    )
}
