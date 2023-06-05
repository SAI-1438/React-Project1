import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homet2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtec2}</h1>
                    <img src={d.imgtec2} alt=''/>
                    <p>Computer security, cyber security , digital security or information technology security (IT security) is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized information disclosure, theft of, or damage to hardware, software, or data, as well as from the disruption or misdirection of the services they provide.[1][2]

The field is significant due to the expanded reliance on computer systems, the Internet,[3] and wireless network standards such as Bluetooth and Wi-Fi.Also, due to the growth of smart devices, including smartphones, televisions, and the various devices that constitute the Internet of things (IoT). Cybersecurity is one of the most significant challenges of the contemporary world, due to both the complexity of information systems and the societies they support. Security is of especially high importance for systems that govern large-scale systems with far-reaching physical effects, such as power distribution, elections, and finance.
                <br/>
                Since the Internet's arrival and with the digital transformation initiated in recent years, the notion of cybersecurity has become a familiar subject in both our professional and personal lives. Cybersecurity and cyber threats have been consistently present for the last 60 years of technological change. In the 1970s and 1980s, computer security was mainly limited to academia until the conception of the Internet, where, with increased connectivity, computer viruses and network intrusions began to take off. After the spread of viruses in the 1990s, the 2000s marked the institutionalization[clarification needed] of cyber threats and cybersecurity.

The April 1967 session organized by Willis Ware at the Spring Joint Computer Conference, and the later publication of the Ware Report, were foundational moments in the history of the field of computer security.[6] Ware's work straddled the intersection of material, cultural, political, and social concerns.[6]

A 1977 NIST publication[7] introduced the CIA triad of confidentiality, integrity, and availability as a clear and simple way to describe key security goals.[8] While still relevant, many more elaborate frameworks have since been proposed.[9][10]

However, in the 1970s and 1980s, there were no grave computer threats because computers and the internet were still developing, and security threats were easily identifiable. More often, threats came from malicious insiders who gained unauthorized access to sensitive documents and files. Although malware and network breaches existed during the early years, they did not use them for financial gain. By the second half of the 1970s, established computer firms like IBM started offering commercial access control systems and computer security software products.[11]

One of the earliest examples of an attack on a computer network was the computer worm Creeper written by Bob Thomas at BBN, which propagated through the ARPANET in 1971. The program was purely experimental in nature and carried no malicious payload. A later program, Reaper, was created by Ray Tomlinson in 1972 and used to destroy Creeper.

Between September 1986 and June 1987, a group of German hackers performed the first documented case of cyber espionage. The group hacked into American defense contractors, universities, and military base networks and sold gathered information to the Soviet KGB. The group was led by Markus Hess, who was arrested on 29 June, 1987. He was convicted of espionage (along with two co-conspirators) on 15 Feb 1990.

In 1988, one of the first computer worms, called the Morris worm, was distributed via the Internet. It gained significant mainstream media attention.

In 1993, Netscape started developing the protocol SSL, shortly after the National Center for Supercomputing Applications (NCSA) launched Mosaic 1.0, the first web browser, in 1993. Netscape had SSL version 1.0 ready in 1994, but it was never released to the public due to many serious security vulnerabilities. These weaknesses included replay attacks and a vulnerability that allowed hackers to alter unencrypted communications sent by users. However, in February 1995, Netscape launched Version 2.0.

The National Security Agency (NSA) is responsible for the protection of U.S. information systems and also for collecting foreign intelligence.
                </p>
                </div>
            )
        })}
        </>
      )
}

export default Homet2