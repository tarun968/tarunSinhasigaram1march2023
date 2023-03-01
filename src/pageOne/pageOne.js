import React from "react"
export default function Card({Props}) {
    return (
        <div className="w-100 h-100 ">
            <span className="card-title fw-bolder" style={{
                fontSize: '90%'
            }}>{Props.id}
            </span>
        </div>

    )
}