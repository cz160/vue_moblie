import axios from 'axios'

const ajax = (Options,all)=>{
    return axios(Options)
            .then(res=>{
                return all?res:res.data.msg;
            }).catch(err=>{
                return err;
            })
}
export default ajax