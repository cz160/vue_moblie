import axios from 'axios'

const ajax = (Options)=>{
    return axios(Options)
            .then(res=>{
                return res.data.msg;
            }).catch(err=>{
                return err;
            })
}
export default ajax