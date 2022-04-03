import React from "react";
import { useEffect, useState } from "react/";

const Digitalclock = () => {
  const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
  }, []);

    
    
    return (
      <div className="digital-clock" >
        <h2>Hora local: {time}</h2>
      </div>
    );
};

export default Digitalclock;
