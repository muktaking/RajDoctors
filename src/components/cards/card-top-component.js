import React from 'react'
import Avatar from '../avatar'
import ReactStars from 'react-stars'
import { FaFire, FaHandHoldingHeart, FaHourglass, FaMedal } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import { graphql, Link } from 'gatsby'

// Fields every doctor card needs. Used by the doctor page and by every list
// (as `localized(lang: $language, fallback: true) { ...DoctorCard }`).
export const query = graphql`
  fragment DoctorCard on Doctor {
    id
    doctorId
    district
    lang
    name
    rating
    specialty
    degrees
    designation
    institute
    badges
    fields {
      slug
    }
    photo {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 512, height: 512, placeholder: BLURRED)
      }
    }
  }
`

export default function CardTopComponent({data, avatarHeight = 120, avaterWidth = 120, avatarTop = '-60px', isSnippet= false}) {
    // Text fields arrive cleaned from GraphQL ("*" already turned into ", ").
    const {district, photo, name, rating, degrees, specialty, designation, institute, fee, badges, biography} = data
  return (
    <div className={rating > 4.5 ? 'bg-warning p-2' : 'bg-light p-2'} style={isSnippet ? {position: 'relative', width: '380px' } : {position: 'relative' }}>
            <div className='d-flex justify-content-start align-items-center'>
                <div style={{ position: "absolute", top: avatarTop}}>
                    <Avatar height={avatarHeight} width={avaterWidth} image={photo && photo.childImageSharp ? photo.childImageSharp.gatsbyImageData : null} className='rounded-circle shadow' />
                </div>
                <div className='' style={{marginLeft: "130px"}}>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '700'}}>{name}</p>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '500'}}>{`${specialty} Specialist`}</p>
                </div>
                
            </div>
            <div className='ml-3 mt-2'>
                <div className='d-flex justify-content-start'>
                    <div>
                        <div className='d-flex justify-content-start'>
                        <ReactStars count={rating} size={18} half={true} color1='#0c7a2b'/>
                        <p className='ml-1 mb-0' style={{color: ' #0c7a2b'}}>({rating})</p>
                        </div>
                        <div style={{color: '#535352', fontWeight: '600', fontSize: ".7rem"}}>
                            {fee && 'Fee: ' + fee + ' Taka'}
                        </div>
                    </div>
                    <div className='ml-3 d-flex'>
                        <ClinicalBadge badges={badges} />                 
                    </div>
                </div>
                <hr />
                <div className='pr-3' style={{fontSize: ".8rem"}}>
                    <p className='mb-0'>{degrees}</p>
                    <p className='mb-0' style={{color: '#535352', fontWeight: '500'}}>{`${designation} at ${institute}`}</p>
                    <p className='text-justify'>{biography}</p>
                </div>
                {isSnippet && <Link to={`/${district}/doctor/${data.fields.slug}/`} className="btn d-block bg-light p-0">
                    Details
                </Link>}
            </div>
        </div>
  )
}

// `badges` is the list of earned badge names from GraphQL, e.g. ["Busy", "Trusted"]
// (the CSV stores them as "Topper*Popular*Busy*Trusted" 0/1 flags).
const BADGE_ICONS = {
    Topper: <FaMedal color='orange' />,
    Popular: <FaFire color='red' />,
    Busy: <FaHourglass color='gray' />,
    Trusted: <FaHandHoldingHeart color='green' />,
}

function ClinicalBadge({badges}){
    return (
        <>
            {(badges || []).map(badge => (
                <div key={badge} className='d-flex flex-column justify-content-center align-items-center'>
                    <span className='d-flex justify-content-center align-items-center bg-light rounded-circle' style={{width: '24px', height: '24px'}}>{BADGE_ICONS[badge]}</span>
                    <Badge variant='pill'>{badge}</Badge>
                </div>
            ))}
        </>
    )
}
