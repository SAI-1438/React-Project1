import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Fitness1 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit1}</h1>
                    <img src={d.imgfit1} alt=''/>
                    <p>Yoga (/ˈjoʊɡə/ (listen);[1] Sanskrit: योग, lit. 'yoke' or 'union' pronounced [joːɡɐ]) is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). There is a wide variety of schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,[3][4][5] and traditional and modern yoga is practiced worldwide.[6]

Two general theories exist on the origins of yoga. The linear model holds that yoga originated in the Vedic period, as reflected in the Vedic textual corpus, and influenced Buddhism; according to author Edward Fitzpatrick Crangle, this model is mainly supported by Hindu scholars. According to the synthesis model, yoga is a synthesis of non-Vedic and Vedic elements; this model is favoured in Western scholarship.[7][8]

Yoga-like practices are first mentioned in the Rigveda.[9] Yoga is referred to in a number of the Upanishads.[10][11][12] The first known appearance of the word "yoga" with the same meaning as the modern term is in the Katha Upanishad,[13][14] which was probably composed between the fifth and third centuries BCE.[15][16] Yoga continued to develop as a systematic study and practice during the fifth and sixth centuries BCE in ancient India's ascetic and Śramaṇa movements.[17] The most comprehensive text on Yoga, the Yoga Sutras of Patanjali, date to the early centuries of the Common Era;[18][19][note 1] Yoga philosophy became known as one of the six orthodox philosophical schools (Darśanas) of Hinduism in the second half of the first millennium CE.[20][web 1] Hatha yoga texts began to emerge between the ninth and 11th centuries, originating in tantra.[21][22]

The term "yoga" in the Western world often denotes a modern form of Hatha yoga and a posture-based physical fitness, stress-relief and relaxation technique,[23] consisting largely of asanas;[24] this differs from traditional yoga, which focuses on meditation and release from worldly attachments.[23][25] It was introduced by gurus from India after the success of Swami Vivekananda's adaptation of yoga without asanas in the late 19th and early 20th centuries.[26] Vivekananda introduced the Yoga Sutras to the West, and they became prominent after the 20th-century success of hatha yoga</p>
                </div>
            )
        })}
        </>
      )
}

export default Fitness1