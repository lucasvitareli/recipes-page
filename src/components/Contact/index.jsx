import React from "react";
import {
    Container,
    Content,
    Title,
    Form,
    Button,
    Socials,
    Icons
} from "./style";

const Contact = () => {
    return (
        <Container>
            <Content>
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
            </Content>
        </Container>
    )
}

export default Contact  