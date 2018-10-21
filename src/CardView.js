import React from 'react';


export const Card = ({data}) => (
            <div>
                <ul className="card">
                   <li>Name: <span className="dtext">{data.name}</span></li>
                   <li>Set_id: <span className="dtext">{data.set_id}</span></li>
                   <li>Status: <span className="dtext">{data.status}</span></li>
                   <li>Date_uploaded: <span className="dtext">{data.date_uploaded}</span></li>
                </ul>
                <div className="Docs-section">Documents  ></div>
            </div>
        );

export const Docs =({docsList}) => (
            <div>
              <ul className="card">
                <li>set_id: <span className="dtext">{docsList.set_id}</span></li>
                <li>doc_id: <span className="dtext">{docsList.doc_id}</span></li>
                <li>name: <span className="dtext">{docsList.name}</span></li>
                <li>uploader: <span className="dtext">{docsList.uploader}</span></li>
                <li>preview_url: <span className="dtext">{docsList.preview_url}</span></li>
                <li>date_uploaded: <span className="dtext">{docsList.date_uploaded}</span></li>
              </ul>
            </div>  
);