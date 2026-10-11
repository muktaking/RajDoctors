import React from 'react'
import { Badge } from 'react-bootstrap'
import { injectIntl } from "gatsby-plugin-intl"

// `data.chambers` comes from the Doctor schema (gatsby-node.js): only chambers
// that have data, with "*" already cleaned and phone numbers split into a list.
function CardChamberInfo({data, intl}) {
    const { chambers = [], protocol } = data
    if (chambers.length === 0) return null
  return (
    <div className='bg-light text-dark px-2 py-2'>
        {chambers.map((chamber, i) => (
            <React.Fragment key={chamber.number}>
                {i > 0 && <hr />}
                <h5 className='text-center' style={{fontWeight: '700', fontSize: ".9rem"}}>{intl.formatMessage({ id: chamber.number === 1 ? "chamber.one" : "chamber.two" })}</h5>
                <ChamberInfo intl={intl} chamber={chamber} protocol={protocol} />
            </React.Fragment>
        ))}
    </div>
  )
}

function ChamberInfo({intl, chamber, protocol}){
    const { name, address, phones, visitTime, hours } = chamber
    return (
        <div className='bg-light text-dark p-2'>
            <InfoSegment title={intl.formatMessage({ id: "chamber.contact-info" })}>
                {phones.map(phone => (
                        <React.Fragment key={phone}>
                            <a href={"tel:" + phone}>
                             {phone}
                            </a>
                            <br />
                        </React.Fragment>
                ))}
            </InfoSegment>
            <InfoSegment title={intl.formatMessage({ id: "chamber.location" })}>
                {name && name + " " + address}
            </InfoSegment>
            <InfoSegment title={intl.formatMessage({ id: "chamber.time" })}>
                {visitTime}
            </InfoSegment>
            <InfoSegment title={'Opening Hour'}>
                {hours}
            </InfoSegment>
            <InfoSegment title='Procedure'>
             { protocol ? protocol : "Please phone to provided number to book a serial"}
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
