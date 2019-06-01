import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Bio from '../components/bio';

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

function SayHello({ location }) {
    const submitForm = event => {
        event.preventDefault();
    };

    return (
        <Layout location={location}>
            <h2>Com&apos;on and say Hello</h2>
            <p>
                Do you have any thoughts or simply just want to get in touch? This is the place. Drop me a line and I
                will get back to you in a couple of days.
            </p>
            <Form onSubmit={submitForm}>
                <TextFieldLabel htmlFor="name">Name</TextFieldLabel>
                <TextField type="text" name="name" id="" />
                <TextFieldLabel htmlFor="email">Email</TextFieldLabel>
                <TextField type="email" name="email" />
                <TextFieldLabel htmlFor="subject">Subject</TextFieldLabel>
                <TextField type="text" name="subject" />
                <TextFieldLabel htmlFor="message">Message</TextFieldLabel>
                <TextArea name="message" id="" cols="30" rows="10" />

                <CheckboxWrapper>
                    <input type="checkbox" name="privacy-policy" id="" />
                    <span>I agree with the terms and conditions</span>
                </CheckboxWrapper>
                <br />
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <Bio />
        </Layout>
    );
}

SayHello.propTypes = {
    location: PropTypes.object,
};

export default SayHello;
