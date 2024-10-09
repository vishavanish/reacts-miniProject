import React, { useEffect, useState }  from "react";

function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.github.com/users/vishavanish";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const data = await response.json();
                // console.log(data);
                setData(data); // Corrected from setdata to setData
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData(); 

    }, []);

    return (
        <div className="justify-normal items-center">
            <div className="text-center mb-6 text-sm mt-5 p-0 font-semibold border-lime-950">
                User: {data ? data.login : 'Loading...'} {/* Render specific data or a loading message */}
                <img src={data.avatar_url} alt="git picture" width={300} height={200}/>
            </div>
        </div>
    );
}

export default Github;
