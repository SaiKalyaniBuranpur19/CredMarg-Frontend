import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SentEmailsList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/emails');
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching sent emails:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Sent Emails</h2>
            {emails.length === 0 ? (
                <p className="text-gray-500">No emails sent yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="py-3 px-5 text-left">Recipient Email</th>
                                <th className="py-3 px-5 text-left">Subject</th>
                                <th className="py-3 px-5 text-left">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emails.map((email, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3 px-5">{email.email}</td>
                                    <td className="py-3 px-5">{email.subject}</td>
                                    <td className="py-3 px-5">{email.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SentEmailsList;
