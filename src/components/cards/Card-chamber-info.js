import React from 'react'
import { Badge } from 'react-bootstrap'
import { injectIntl } from "gatsby-plugin-intl"

function CardChamberInfo({data, intl}) {
    const { contact1, contact2, loc1, loc2, locDetail1, locDetail2, visitTime1, visitTime2, OpenTime1, Protocol } = data
  return (
    <div className='bg-light text-dark px-2 py-2'>
        <h5 className='text-center' style={{fontWeight: '700', fontSize: ".9rem"}}>{intl.formatMessage({ id: "chamber.one" })}</h5>
        <ChamberInfo intl={intl} contact={contact1} loc={loc1} locDetail={locDetail1} visitTime={visitTime1} OpenTime={OpenTime1} Protocol={Protocol} />
        {
            contact2 && <>  <hr /> <h5 className='text-center' style={{fontWeight: '700', fontSize: ".9rem"}}>{intl.formatMessage({ id: "chamber.two" })}</h5>
                <ChamberInfo intl={intl} contact={contact2} loc={loc2} locDetail={locDetail2} visitTime={visitTime2} Protocol={Protocol} />
            </>
        }

    </div>
  )
}

function ChamberInfo({intl, contact, loc, locDetail, visitTime, OpenTime, Protocol}){
    return (
        <div className='bg-light text-dark p-2'>
            <InfoSegment title={intl.formatMessage({ id: "chamber.contact-info" })}>
                {contact.split("*").map(cont => (
                        <>
                            <a href={"tel:" + cont}>
                             {cont}
                            </a>
                            <br />
                        </>
                ))}
            </InfoSegment>
            <InfoSegment title={intl.formatMessage({ id: "chamber.location" })}>
                {loc && loc.replace(/\*/g, ",") + " " + locDetail.replace(/\*/g, ",")} 
            </InfoSegment>
            <InfoSegment title={intl.formatMessage({ id: "chamber.time" })}>
                {visitTime && visitTime.replace(/\*/g, ",")}
            </InfoSegment>
            <InfoSegment title={'Opening Hour'}>
                {OpenTime && OpenTime.replace(/\*/g, ",")}
            </InfoSegment>
            <InfoSegment title='Procedure'>
             { Protocol ? Protocol.replace(/\*/g, ",") : "Please phone to provided number to book a serial"}
            </InfoSegment>
        </div>    
    ) 
}

function InfoSegment({title, children}){
    return (
        <div className='d-flex justify-content-start border-bottom mb-1 pb-1'>
                <Badge>{title}: </Badge>
                <span style={{fontWeight: '500', fontSize: ".8rem"}}>
                    {children}
                </span>
            </div>
    )
}

export default injectIntl(CardChamberInfo);