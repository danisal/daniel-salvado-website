import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import Bio from '../components/bio';
import SEO from '../components/seo';

import { encode } from '../utils/helpers';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    border-radius: 24px;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #134896;
    font-weight: 500;
    border: 1px solid #134896;
    transition: cubic-bezier(0.46, 0.03, 0.52, 0.96) 300ms;
    background-color: white;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #134896;
    }

    &:focus {
        outline: none;
    }

    &:active {
        border-style: solid;
    }

    &:disabled,
    [disabled] {
        border-color: grey;
        color: grey;
        cursor: not-allowed;
        background-color: white;
    }
`;

const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    > input {
        margin: 10px;
    }
`;

const TextField = styled.input`
    outline: none;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 8px 16px;
    width: 100%;

    &:focus {
        border-color: #134896;
    }
`;

const TextArea = styled.textarea`
    outline: none;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 8px 16px;
    resize: none;

    &:focus {
        border-color: #134896;
    }
`;

const TextFieldLabel = styled.label`
    transform: translate(17px, 12px);
    pointer-events: none;
    background: white;
    width: fit-content;
    padding: 0 2px;
    z-index: 1;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 1rem;
`;

function SayHello() {
    const [form, setForm] = useState({
        name: ``,
        email: ``,
        subject: ``,
        message: ``,
        terms: false,
    });

    useEffect(() => {
        return () => {
            isValidateForm();
        };
    }, [form]);

    const handleChange = event => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleCheckbox = event => {
        const { name, checked } = event.target;

        setForm({
            ...form,
            [name]: checked,
        });
    };

    const isValidateForm = () => {
        const { name, email, subject, message, terms } = form;

        // prettier-ignore
        return (!terms || (name === `` || email === `` || subject === `` || message === ``));
    };

    const submitForm = event => {
        event.preventDefault();

        const { terms, ...rest } = form;

        fetch(`/`, {
            method: `POST`,
            headers: { 'Content-Type': `application/x-www-form-urlencoded` },
            body: encode({ 'form-name': `contact`, ...rest }),
        })
            .then(() => navigate(`/thank-you`))
            .catch(error => console.log(error));
    };

    return (
        <Layout>
            <SEO title="Say Hello" keywords={[`contact`, `form`, `email`]} />
            <h2>Come say hello</h2>
            <p>
                Do you have any thoughts, suggestions or simply just want to get in touch regarding something else? This
                is the place.
            </p>
            <p>Drop me a line and I will get back to you in a couple of days.</p>
            <Form onSubmit={submitForm} data-netlify="true" data-netlify-honeypot="bot-field">
                <TextFieldLabel htmlFor="name">Name</TextFieldLabel>
                <TextField id="name" name="name" onChange={handleChange} required type="text" value={form.name} />
                <TextFieldLabel htmlFor="email">Email</TextFieldLabel>
                <TextField id="email" name="email" onChange={handleChange} required type="email" value={form.email} />
                <TextFieldLabel htmlFor="subject">Subject</TextFieldLabel>
                <TextField
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    required
                    type="text"
                    value={form.subject}
                />
                <TextFieldLabel htmlFor="message">Message</TextFieldLabel>
                <TextArea
                    cols="20"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Tell me more..."
                    required
                    rows="10"
                    value={form.message}
                />

                <CheckboxWrapper>
                    <Label htmlFor="terms">
                        <Checkbox
                            id="terms"
                            name="terms"
                            onChange={handleCheckbox}
                            required
                            type="checkbox"
                            value={form.terms}
                        />
                        I agree with the terms and conditions
                    </Label>
                </CheckboxWrapper>
                <br />
                <SubmitButton type="submit" disabled={isValidateForm()}>
                    Submit
                </SubmitButton>
            </Form>
            <Bio />
        </Layout>
    );
}

SayHello.propTypes = {};

export default SayHello;
