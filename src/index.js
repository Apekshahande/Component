import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from "./Sdata"




// function Card(props){
//   console.log(props);
//   return(
//     <>
//       <div className = "cards">
//         <div className = "card">
//           <img src={props.imagscr} alt ="myPic" className = "card_img" />
//           <div className ="card_info">
//           <span className = "card_category">{props.sname}</span>
//           <h3 className = "card_title">{props.title}</h3>
//           <a href = {props.links} target = "_blank">
//             <button>watch Now</button>
//           </a>
//         </div>
//       </div>
//       </div>
//       </>

//   )
// }

// console.log(Sdata[0].Sname);// it will give index 0 data.

// function netflixcard(val){
//   console.log(val)
//   return(
//     <Card imagscr={val.imagscr}
//     title={val.title} 
//      Sname ={val.Sname} 
//      links={val.links}/>
//   );

// }


ReactDOM.render(
  <>
  <h1 className ="heading_style"> List of 5 Netflix Series in 2020</h1>
    {/* <Card imagscr="https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_989,w_640/v1591201300/user-920875/submissions/az0uobr9yooscs7aelaq.jpg" 
    title="Netflix Orignal Series"  Sname ="DARK"  links="https://www.netflix.com/in/title/80100172"

  />
  <Card imagscr ="https://m.media-amazon.com/images/M/MV5BYzg0NjMyOTYtNjAyNi00MmFkLWExMjQtOGRhMDA0MmNlNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" 
  title="Netflix Orignal Series" sname= "extra curricular" links="https://www.netflix.com/in/title/80990668"/>
  <Card imagscr = "https://lh3.googleusercontent.com/proxy/XXA76Lncajze37HDebNCE6V00Zz6KAeCAPNdBz75ma3KFqh7sC1QW5avPYT4eOVIIp1VTh38B466jT31cW13-54NJQ887slWXDesC27_omzbAw_5OoBZb_UJGIO2jaC1aPX6gs3qOePpLDisQVRzCc9d4DQW3_Idbx633F-F2c_NnEWVf3SqGkSYBYh942qSoo4DHsc" 
  title ="Netflix Orignal Series" sname="Stranger Things" links ="https://www.netflix.com/in/title/80057281"/>
    </>, */}

     
  {/* <Card imagscr={Sdata[0].imagscr}
  title={Sdata[0].title} 
   Sname ={Sdata[0].Sname} 
   links={Sdata[0].links}/> */}

   {/* { Sdata.map(netflixcard)} */}
   {/* {Sdata.map(function netflixcard(val){ */}


   {Sdata.map((val,index)=>{
     console.log(index);
     return(
      <Card imagscr={val.imagscr}
      title={val.title} 
      Sname ={val.Sname} 
      links={val.links}/>
    );
  
   })}


  {/* <Card imagscr={Sdata[1].imagscr}
  title={Sdata[1].title}  Sname ={Sdata[1].Sname}  links={Sdata[1].links}/>
  <Card imagscr={Sdata[2].imagscr}
  title={Sdata[2].title}  Sname ={Sdata[2].Sname}  links={Sdata[2].links}/>
  <Card imagscr={Sdata[3].imagscr}
  title={Sdata[3].title}  Sname ={Sdata[3].Sname}  links={Sdata[3].links}/> */}
  


  </>,
  


    // <>

  // <div className = "cards">
  //   <div className = "card">
  //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExSkKcaRTQhBiPonMYX4tFmUttcsw1m95YA&usqp=CAU" alt ="myPic" className = "card_img" />
  //     <div className ="card_info">
  //     <span className = "card_category"> A Netflix Orignal Series</span>
  //     <h3 className = "card_title"></h3>
  //     <a href = "https://www.netflix.com/in/title/80100172" target = "_blank">
  //       <button>watch Now</button>
  //     </a>
  //   </div>
  // </div>
  // </div>
  // </>,


  document.getElementById('root')// whenever you want to show this code uncommend this commend
  );
  