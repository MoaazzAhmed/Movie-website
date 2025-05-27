import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Contact() {
    const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_70rint4', 'template_8f9ygl8', form.current, {
                publicKey: 'TJ98bI2lY0Np79djU',
            })
            .then(
                Swal.fire({
                    title: "Email has been sent 😃👌",
                    icon: "success",
                }),
                navigate("/")
            );
    };
    return (<>
        <section className="w-50 mx-auto" style={{ marginTop: "10rem" }}>
            <h2 className="text-warning fs-1 text-center mb-5">
                Tell us your problem
            </h2>
            <form ref={form} onSubmit={sendEmail} className="w-75 mx-auto">
                <label className="mt-4 mb-2 text-warning">Name</label>
                <input type="text" name="user_name" className="form-control" />
                <label className="mt-4 mb-2 text-warning">Email</label>
                <input type="email" name="user_email" className="form-control" />
                <label className="mt-4 mb-2 text-warning">Message</label>
                <textarea name="message" className="form-control" />
                <input type="submit" value="Send" className="btn btn-outline-warning mt-4 w-25 fs-5" />
            </form>
        </section>
    </>);
}

export default Contact;