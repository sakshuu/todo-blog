import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as yup from "yup"
import { addBlog } from '../../redux/blogSlice'
export default function Account() {
   const dispatch =  useDispatch()

    const formik = useFormik({
        initialValues: {
            inp1: "john",
            inp2: "doe"
        },
        validationSchema: yup.object({
            inp1: yup
                .string()
                .required("Please Enter Somehting"),
            inp2: yup
                .string()
                .required("please enter something")
        }),
        onSubmit: (values) => {
            dispatch(addBlog({
                title: values.inp1,
                desc: values.inp2
            }))
        }
    })

    return (
        <div className="container">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Add Blog</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>

                            <input className='form-control' type="text" name="inp1" onChange={formik.handleChange} value={formik.values.inp1}/>
                            <br />
                            <input className='form-control' type="text" name="inp2" onChange={formik.handleChange} value={formik.values.inp2}/>
                            <br />
                            <button type='submit' className="btn btn-outline-success">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}