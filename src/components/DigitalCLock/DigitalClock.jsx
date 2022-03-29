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
      <div>
        <h3>Hora local: {time}</h3>
      </div>
    );
};

export default Digitalclock;
