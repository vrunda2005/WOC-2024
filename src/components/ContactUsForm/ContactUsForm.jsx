import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a server)
        console.log('Form Data Submitted:', formData);
        alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div style={styles.container}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    ></textarea>
                </div>
                <button type="submit" style={styles.button}>Send Message</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    textarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default ContactUs;
