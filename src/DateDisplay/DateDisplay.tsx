import { useState } from "react";

const DateDisplay = (props: any) => {
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    const today = `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;

    const [date, setDate] = useState(today);

    return <div>
        <h5 className="float-right">{date}</h5>
    </div>

}

export default DateDisplay;