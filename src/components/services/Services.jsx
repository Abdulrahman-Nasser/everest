import { useEffect, useState } from "react"
import { Container, Fig, Grid, Heading, Section, Title, Service, FigIcon, IconWrapper } from "./ServicesStyle"
import ServiceIcon from '../../assets/images/service-icon.svg'
import { serviceData } from "./serviceData"

const Services = () => {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('./serviceData.json')
    //         const d = await res.json()
    //         setData(d)
    //     }
    //     fetchData()
    // }, [])
    // const arr = [{ url: '/src/assets/images/service1.png' }]

    return (
        <Section>
            <Container>
                <Heading>services</Heading>
                <Grid>
                    {
                        serviceData && serviceData?.map(({ img, title, id }) => {
                            { console.log(title) }
                            return (
                                <Service key={id} imgUrl={img} className="img">
                                    <Fig>
                                        <IconWrapper>
                                            <FigIcon src={ServiceIcon} alt="service icon" />
                                        </IconWrapper>
                                        <Title key={id}>{title}</Title>
                                    </Fig>
                                </Service>
                            )
                        })
                    }
                    {/* <Fig imgUrl={arr[0].url}>test</Fig> */}
                </Grid>
            </Container>
        </Section>
    )
}

export default Services