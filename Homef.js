import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homef = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit}</h1>
                    <img src='https://www.healthhub.sg/sites/assets/Assets/In-Article%20Images%20(Small)/my_healthy_plate_inarticle_400.jpg' alt=''/>
                    <p><h2>Healthy Eating Plan</h2><br/>
A healthy eating plan gives your body the nutrients it needs every day while staying within your daily calorie goal for weight loss. A healthy eating plan also will lower your risk for heart disease and other health conditions.<br/>
<br/>
<h2>A healthy eating plan:</h2>
<br/>
Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products<br/>
Includes lean meats, poultry, fish, beans, eggs, and nuts<br/>
Limits saturated and trans fats, sodium, and added sugars<br/>
Controls portion sizes<br/><br/>
<h2>Calories</h2>
To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT).<br/>
<br/>
For a weight loss of 1–1 ½ pounds per week, daily intake should be reduced by 500 to 750 calories. In general:<br/>
<br/>
Eating plans that contain 1,200–1,500 calories each day will help most women lose weight safely.<br/>
Eating plans that contain 1,500–1,800 calories each day are suitable for men and for women who weigh more or who exercise regularly.<br/>
Very low calorie diets of fewer than 800 calories per day should not be used unless you are being monitored by your doctor.</p>
                </div>
            )
        })}
        </>
      )
}

export default Homef