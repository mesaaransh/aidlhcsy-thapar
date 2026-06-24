import React from 'react';
import { Link } from 'react-router-dom';
import { importantDates } from "../data/conferenceData";
import './Floater.css';

const quickLinks = [
    {
        id: 1,
        label: 'AUTHOR GUIDELINES',
        type: 'internal',
        to: '/authors',
    },
    {
        id: 2,
        label: 'HOW TO SUBMIT',
        type: 'external',
        href: 'https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html',
    },
    {
        id: 3,
        label: 'SUBMIT PAPER',
        type: 'external',
        href: 'https://cmt3.research.microsoft.com/AIDLHCSY2027',
    },
];

export default function Floater() {
    return (
        <aside className="floater" id='dates' aria-label="Important Dates">
            <section className="quickLinks">
                <ol>
                    {quickLinks.map((link) =>
                        link.type === 'internal' ? (
                            <li key={link.id}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ) : (
                            <li key={link.id}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                            </li>
                        )
                    )}
                </ol>
            </section>
            <section className="impDates">
                <h3>IMPORTANT DATES</h3>
                <ul>
                    {importantDates.map((item) => (
                        <li key={item.id}>
                            <span className="date-label">{item.label}</span>
                            <span className="date-value">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
