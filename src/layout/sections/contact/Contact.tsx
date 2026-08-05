import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import { S } from "./Contacs.ts";
import emailjs from '@emailjs/browser';
import {ElementRef, FormEvent, useRef} from "react";
import * as React from "react";


export const Contact:React.FC = () => {

    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_w5d86xd', 'template_4jn1z1c', form.current, {
            publicKey: '1zJloKRNeEYL1WK06',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current?.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


        return (
            <S.Contact id={"contact"}>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={"Name"} name={"user_name"}/>
                        <S.Field required type="email" placeholder={"Email"} name={"email"}/>
                        <S.Field required placeholder={"subject"} name={"subject"}/>
                        <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                        <Button type="submit">Send message</Button>
                    </S.Form>
                </Container>
            </S.Contact>
        );
    };
