import React,{useState,useEffect} from 'react';
import './E2e.css'
import axios from 'axios';
function E2e() {
  const [flag0,setflag0]=useState(false);
  const [flag1,setflag1]=useState(false);
  const [flag2,setflag2]=useState(false);
  const [flag3,setflag3]=useState(false);
  const [flag4,setflag4]=useState(false);
  const [flag5,setflag5]=useState(false);
  const [flag6,setflag6]=useState(true);
  const[sixthev,setsixthev]=useState('');
  const[sixthev1,setsixthev1]=useState('');
  const[fifthev,setfifthev]=useState('');
  const[fifthev1,setfifthev1]=useState([]);
  const[fifthev3,setfifthev3]=useState('');
  const[fifthev13,setfifthev13]=useState([]);
  const[fifthev4,setfifthev4]=useState('');
  const[fifthev14,setfifthev14]=useState([]);
  const [apiResponse,setapiResponse]=useState("");
  const callAPI=()=>{
    axios("http://localhost:9000/teacher")
      .then(function (response) {
        const data = JSON.stringify(response.data);
        const array = JSON.parse(data).array;
        setapiResponse(array);
      })
  }
  useEffect( () => {
    callAPI();
 }, []);
  const sixthdivlogin=(e)=>{
    e.preventDefault();
  if(apiResponse.email==sixthev){
    console.log(apiResponse)
    setflag1(false);
    setflag0(true);
    setflag2(true);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(false);
  }
  else{
    console.log("incorrect email or password");
    console.log(apiResponse);
  }
  }
  const profileclick=()=>{
    setflag1(true);
    setflag0(true);
    setflag2(false);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(false);
  }
  const passwordchange=()=>{
    setflag0(true);
    setflag1(false);
    setflag2(false);
    setflag3(true);
    setflag4(false);
    setflag6(false);
    setflag5(false);
  }
  const timetablechange=()=>{
    setflag0(true);
    setflag1(false);
    setflag2(true);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(false);
  }
  const fourdivcontinue=()=>{
    setflag0(true);
    setflag1(true);
    setflag2(false);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(false);
  }
  const applyleave=()=>{
    setflag0(true);
    setflag1(false);
    setflag2(false);
    setflag3(false);
    setflag4(true);
    setflag5(false);
  }
  const applysubmit=()=>{
    setflag0(true);
    setflag1(false);
    setflag2(false);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(true);
    setfifthev1([...fifthev1,fifthev])
    setfifthev13([...fifthev13,fifthev3])
    setfifthev14([...fifthev14,fifthev4])
  }
  const leavehistory=()=>{
    setflag0(true);
    setflag1(false);
    setflag2(false);
    setflag3(false);
    setflag4(false);
    setflag6(false);
    setflag5(true);
  }
  const logoutchange=()=>{
    setflag0(false);
    setflag1(false);
    setflag2(false);
    setflag3(false);
    setflag4(false);
    setflag6(true);
    setflag5(false);
  }
  const sixthdivhandleemailchange=(sixthdiveve)=>{
    setsixthev(sixthdiveve.target.value);
  }
  const sixthdivhandlepasswordchange=(sixthdivpas)=>{
    setsixthev1(sixthdivpas.target.value);
  }
  const seventhdivdisplay=(
    <div>
    {fifthev13.map((displ13)=>(<div>
      {fifthev14.map((displ14)=>(<div>
        {fifthev1.map((displ1)=>(<div className='seventhdiv1'>
          <h3 className='seventhdivth1'>NAME</h3>
          <h3 className='seventhdivth2'>DATE</h3>
          <h3 className='seventhdivth3'>ASSIGNED TO</h3>
          <p className='seventhdivtd1'>{displ1}</p>
          <p className='seventhdivtd2'>{displ13}</p>
          <p className='seventhdivtd3'>{displ14}</p>
        </div>))}
      </div>))}
    </div>))}

    </div>
  )
  return (
    <div className="app">
      <div className='fulldiv'>
      {flag0&&<div className='sidediv'>
        <div className='igdiv'>
        <img src='https://cdn-icons-png.flaticon.com/128/1077/1077114.png' className='ig'></img>
        <p className='abc'>{sixthev}</p>
      </div>
      <div className='oh'>
      <p className='pr'><a href='#' onClick={profileclick}>Profile</a></p>
      <p className='cp'><a href="#" onClick={passwordchange}>Change password</a></p>
      <p className='lh'><a href="#" onClick={leavehistory}>leave history</a></p>
      <p className='al'><a href="#" onClick={applyleave}>Apply leave</a></p>
      <p className='lt'><a href="#" onClick={logoutchange}>logout</a></p>
      <p className='te'><a href="#" onClick={timetablechange}>Timetable</a></p>
      </div>
    </div>}
          {flag1&&<div className='rightdiv'><div className='igdivs'><img src='https://cdn-icons-png.flaticon.com/128/552/552721.png' className='igs'></img>
          </div><p className='use'>username</p>
          <h5 className='el'>Email:</h5>
          <h5 className='us'>Username</h5>
          <h5 className='pn'>Phone number</h5>
          </div>}
    {flag2&&<div className='thirddiv'>
      <table border={1}>
        <tr className='firsttr'>
        <th className='firstth1'>DAYS</th>
          <th className='firstth2'>8:20-9:15</th>
          <th className='firstth3'>9:15-10:10</th>
          <th className='firstth4'>10:10-10:20</th>
          <th className='firstth5'>10:20-11:20</th>
          <th className='firstth6'>11:20-12:10</th>
          <th className='firstth7'>12:10-12:45</th>
          <th className='firstth8'>12:45-1:45</th>
          <th className='firstth9'>1:45-2:25</th>
          <th className='firstth10'>2:25-3:15</th>
        </tr>
        <tr>
          <td>MONDAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>TUESDAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>WEDNESAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>THURSDAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>FRIDAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>SATURDAY</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>}
    {flag3&&<div className='fourthdiv'>
      <input type='email' className='fourdivi1' placeholder=' ✉️ Email '></input>
      <input type='password' className='fourdivi2' placeholder=' Password' ></input>
      <input type='password' className='fourdivi3' placeholder='Confirm password'></input>
      <button className='fourdivbtn' onClick={fourdivcontinue}>Continue</button>
    </div>}
    {flag4&&<div className='fifthdiv'>
        <p className='fifthdivp1'>Name</p>
        <input type='text' className='fifthdivi1' placeholder=' Enter your Name' onChange={(eve2)=>{setfifthev(eve2.target.value)}}></input>
        <p className='fifthdivp2'>DATE</p>
        <input type='date' className='fifthdivi2' placeholder=' DATE' onChange={(eve3)=>{setfifthev3(eve3.target.value)}}></input>
        <div className='fifthdivinnerdiv'><p className='fifthdivinnerp1'>Leave type</p><label for ="leave" className='fifthdivltype'></label>
        <select name='leave' className='fifthdivinnerleave'>
        <option >Casual Leave</option> 
        <option >Sick Leave</option>
        <option >Workshop Leave </option></select>
        <div className='fifthdivinnerdiv1'><p className='fifthdivinnerp2'>Classes Assigned </p>
        <input type='text' className='fifthdivinneri1' placeholder='  Enter Name of the Teacher' onChange={(eve4)=>{setfifthev4(eve4.target.value)}}></input></div>
        <button className='fifthdivinnerdiv1btn' onClick={applysubmit}>Submit</button>
        </div>
      </div>}
      {flag5&&<div className='seventhdiv'>
      {seventhdivdisplay}
      </div>}
      {flag6&&<div className='sixthdiv'>
      <h5 className='sixthdivteacherlogin'>Teacher Login</h5>
      <input type="email" className="sixthdivem" placeholder='✉️ EMAIL' onChange={sixthdivhandleemailchange}></input><br></br>
      <input type="password" className="sixthdivps" placeholder='      Password' onChange={sixthdivhandlepasswordchange}></input><br></br>
      <button className="sixthdivsig" onClick={sixthdivlogin}>Login</button>
      </div>}
    </div>
    </div>
  );
}
export default E2e;
