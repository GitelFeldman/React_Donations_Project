import Donate from "./Donate";
const ShowSortedArr = ({arr}) => {
console.log("arr "+arr);
    return ( 
        <ul >
   
        {arr.map((item,index)=>{return <div>
            <Donate don={item} ind={index} />;
        </div> })}
</ul>
   
)
  }
export default ShowSortedArr;