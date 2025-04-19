import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram  } from 'react-icons/fa';
import {
    Container,
    Content,
    ContactContent,
    Title,
    Socials,
    SocialsContent,
    SocialsText,
    SocialsIcons,
    Icon,
    Form,
    Button,
} from "./style";

const Contact = () => {
    return (
        <Container id='contact'>
            <Content>
                <Socials>
                    <SocialsContent>
                        <SocialsText>FOLLOW <span className="highlight">CHEF NAVARRO</span> ON ...</SocialsText>
                        <SocialsIcons>
                            <Icon href="#" iconColor="#fff">
                                <FaFacebook size={50} />
                            </Icon>
                            <Icon href="#">
                                <FaInstagram size={50} />
                            </Icon>
                            <Icon href="#" iconColor="#fff">
                                <FaYoutube size={50} />
                            </Icon>
                            <Icon href="#">
                                <FaTelegram size={50} />
                            </Icon>
                        </SocialsIcons>
                    </SocialsContent>
                </Socials>
                <ContactContent>
                    <Title> Contact </Title>
                    <Form>
                        <label htmlFor="name">Name <span>*</span></label>
                        <input type="text" />
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="text" />
                        <label htmlFor="message">Message <span>*</span></label>
                        <textarea id="message"></textarea>
                        <Button>SEND</Button>
                    </Form>
                </ContactContent>
            </Content>
        </Container>
    )
}

export default Contact