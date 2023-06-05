import React, { createContext,useState} from 'react'

export const store=createContext();

const Store = (props) => {
    const [data,setData]=useState([
      {id:0, cat:"Home", imgh1:'https://resizing.flixster.com/-rfOPWMQGyf8jPLhmb6KfyeW2r8=/300x300/v2/https://flxt.tmsimg.com/assets/p14950093_v_v8_aa.jpg', headingh1:"Viking-Siege",
                        imgh2:'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg', headingh2:"TOPGUN-MAVERICK",
                        imgh3:'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg', headingh3:"The Dark Knight",
                        imgtec1:'https://www.thetechnologyheadlines.com/images/Technology/2019/9/Latest-Technologies-in-Printing-World.png', headingtec1:"Printing Technology",
                        imgtec2:'https://www.openaccessgovernment.org/wp-content/uploads/2021/07/dreamstime_xl_217658546-scaled.jpg', headingtec2:"Computer-Security",
                        imgtec3:'https://www.rdworldonline.com/wp-content/uploads/2020/04/AdobeStock_305098448.jpeg', headingtec3:"Nano-Technology",
                        headingfit:"Healthy-Plans",},
        {id:1, cat:"Bollywood", img1:'https://play-lh.googleusercontent.com/pnl5NhnOPmY4Q-2fMdxNtJhUEDiYJFmF2fIuVJRsmmEuEF-fyXWs6M7k7VD9VTbGv0ULbQkCCR93rTH13ww', heading1:"War", 
                                img2:'https://filmfare.wwmindia.com/content/2022/dec/pathaan11669878737.jpg', heading2:"Pathaan", 
                                img3:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DC8BD2C81382614E056953E30539470FB48594CB97ADAC1C9337AFAB1894A49E/scale?width=1200&aspectRatio=1.78&format=jpeg', heading3:"Brahmastra",
                                img4:'https://www.koimoi.com/wp-content/new-galleries/2022/03/box-office-gangubai-kathiawadi-is-very-good-on-wednesday-001.jpg', heading4:'Gangubai-kathiavadi',
                                img5:'https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg', heading5:'Bhool-Bhulaiyaa',
                                img6:'https://assets.gadgets360cdn.com/pricee/assets/product/202301/Bholaa_1674473942.jpg', heading6:'Bholaa',},
          {id:2, cat:"Technology", imgtech1:'https://www.marktechpost.com/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled.jpg', headingtech1:"Artificial-Intelligence",
                                   imgtech2:'https://engineering.princeton.edu/wp-content/uploads/2022/01/Robotics_features_origami_16x9.jpg', headingtech2:"Robotics",
                                   imgtech3:'https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg', headingtech3:"Machine-Learning",
                                   imgtech4:'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs40011-021-01320-4/MediaObjects/40011_2021_1320_Figa_HTML.png', headingtech4:"Bio-Technology",
                                   imgtech5:'https://i.ytimg.com/vi/DhrL5xhnsrQ/maxresdefault.jpg', headingtech5:"Information-Technology",
                                   imgtech6:'https://www.analyticsinsight.net/wp-content/uploads/2022/04/Automation-Can-Help-Your-Company.jpg', headingtech6:"Automation",},
            {id:3, cat:"Hollywood", imghol1:'https://irs.www.warnerbros.com/gallery-v2-jpeg/inception_posterlarge_8-1308772917.jpg', headinghol1:"Inception",
                                    imghol2:'https://images.csmonitor.com/csmarchives/2011/06/Harry_potter.jpg?alias=standard_900x600', headinghol2:"Harry-Potter",
                                    imghol3:'https://i.scdn.co/image/ab67616d0000b273b0ba4e39ff6ab67df782d336', headinghol3:"Mad Max-Fury Road",
                                    imghol4:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg', headinghol4:"Avatar",
                                    imghol5:'https://occ-0-2794-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdo5havGZN1pB4N8-A4UpLqJSNzQT1apPofuC864w7iI_UCr3h_Iy2zjntwCU2C-y1NG3J2eeVXeIq2rxDyj-nLBZk2Q9F9y0yDT.jpg?r=24b', headinghol5:"Lord of the Rings",
                                    imghol6:'https://m.media-amazon.com/images/I/81FcjKS7peL._AC_UF1000,1000_QL80_.jpg', headinghol6:"Aladdin",}, 
              {id:4, cat:"Fitness", imgfit1:'https://img.freepik.com/free-vector/set-yoga-postures_1308-119286.jpg?w=2000', headingfit1:"Yoga",
                                    imgfit2:'https://play-lh.googleusercontent.com/348UQhiAedTq8SergwmHK5XVxtdDf4QRi4nq_u_rjKyjTjnzcRrix1O-e3LCNK_FgA', headingfit2:"Aerobics",
                                    imgfit3:'https://media.istockphoto.com/id/814632144/vector/walking-man-vector-icon-people-walk-sign-illustration.jpg?s=612x612&w=0&k=20&c=gjmcfmuCTCdvC-uQD7lOEaU3WAIqefiDRdMR_NYaxs4=', headingfit3:"Walking",
                                    imgfit4:'https://m.media-amazon.com/images/I/412p2EfdlzL.jpg', headingfit4:"Body-Building",
                                    imgfit5:'https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=', headingfit5:"Running",
                                    imgfit6:'https://images.wsj.net/im-786590?width=1280&size=1.33333333', headingfit6:"Cycling",},
                {id:5, cat:"Food", imgfod1:'https://www.woodwardenglish.com/wp-content/uploads/2020/06/fruit-english-vocabulary.jpg', headingfod1:"Fruits",
                                   imgfod2:'https://m.media-amazon.com/images/I/81V3vwXfP+L._AC_UF1000,1000_QL80_.jpg', headingfod2:"Vegetables",
                                   imgfod3:'https://www.researchgate.net/publication/352121284/figure/fig1/AS:1030930537922561@1622804402526/Fig-No-4-Image-of-Starchy-foods.jpg', headingfod3:"Starchy-Foods",
                                   imgfod4:'https://howtamil.com/wp-content/uploads/2022/03/Tomato.jpg', headingfod4:"Dairy-Foods",
                                   imgfod5:'https://www.wellcurve.in/blog/wp-content/uploads/2021/02/High-Protein-Foods.jpg', headingfod5:"Protein-Foods",
                                   imgfod6:'https://previews.123rf.com/images/jackf/jackf1909/jackf190904718/129816712-collection-of-fresh-raw-meats-and-meat-products-seafoods-and-fish-isolated-on-white.jpg', headingfod6:"Non-Veg-Foods",},                                                                  
    ])
  return (
    <>
    <store.Provider value={[data, setData]}>
        {props.children}
    </store.Provider>
    </>
  )
}

export default Store