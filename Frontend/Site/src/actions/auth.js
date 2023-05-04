import axios from "axios"
import '../axios'


export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post("/api/login/",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"LoginSuccess",
            payload:data.message
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoginFailure",
            payload:error.response.data
        })
    }    
}
export const register = (name, email, password,phone) => async (dispatch) => {
    try {
        dispatch({
            type: "SignUpRequest",
        });

        const { data } = await axios.post("/api/signup/",{name,email,phone,password},{
            headers: { "Content-Type": "application/json" },
            }
        );

        dispatch({
            type: "SignUpSuccess",
            payload: data.message,
        });
    } 
    catch (error) {
      console.log(error.response.data, error.response.status);
      dispatch({
        type: "SignUpFailure",
        payload: error.response.data,
      });
    }
  };
export const googleLogin = (tokenId,profile)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GoogleLoginRequest"
        })
        localStorage.removeItem("user");
        
        const {data} = await axios.post(`/api/google-auth/`,{token_id:tokenId},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"GoogleLoginSuccess",
            payload:profile
        })
        localStorage.setItem(
            'user',
            JSON.stringify({token: data.token })
        )
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GoogleLoginFailure",
            payload:error.response.data
        })
    }    
}
export const loadUser = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoadUserRequest"
        })

        axios.interceptors.request.use(function (req) {
        const user = localStorage.getItem('user');
        if (user) {
            const { token } = JSON.parse(localStorage.getItem('user'));
            req.headers.authorization = `Bearer ${token}`;
            return req;
        }
        return req;
        });

        await axios.get("/api/verify-jwt/")
        dispatch({
            type:"LoadUserSuccess",
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.detail
        })
    }    
}

export const forgot = (email)=>async(dispatch)=>{
    try {
        dispatch({
            type:"ForgotPassRequest"
        })
        const {data} = await axios.post(`/api/forgot/`,{email},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"ForgotPassSuccess",
            payload:data.message
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ForgotPassFailure",
            payload:error.response.data
        })
    }    
}

export const reset = (otp,pw)=>async(dispatch)=>{
    try {
        dispatch({
            type:"ChangePassRequest"
        })
        const {data} = await axios.post(`/api/reset/`,{otp,pw},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"ChangePassSuccess",
            payload:data.message
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"ChangePassFailure",
            payload:error.response.data
        })
    }    
}