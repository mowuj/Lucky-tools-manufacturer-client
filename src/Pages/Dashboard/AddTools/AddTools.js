import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AddTools = () => {
  /**
   * 3 way to store images
   * 1.Third party storage //Free open public storage is ok for practice project
   * 2.Your own storage in your own server (file system)
   * 3.Database:mongodb
   * 
   * YUP:to validate file:Search:YUP file validation for react hook form
   */
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const {data:services,isLoading}=useQuery('services',()=>fetch('https://agile-citadel-75234.herokuapp.com/service').then(res=>res.json()))

  const imageStorageKey = '57d910e362621157f7a4fff266d13647';

    const onSubmit =async data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: 'POST',
        body:formData
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            const img = result.data.url;
            const service = {
              name: data.name,
              email: data.email,
                quantity: data.quantity,
                Minimum_quantity: data.maxquantity,
              description:data.description,
              img:img
            }
            //send to your database
            fetch('https://agile-citadel-75234.herokuapp.com/service', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(service)
            })
              .then(res => res.json())
              .then(inserted => {
                if (inserted.insertedId) {
                toast.success('Tools added successfully')
                reset()
                }
                else {
                  toast.error('Failed to add Tools')
                }
            })
          }
          
        })
    }
    if (isLoading) {
        return<Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
    
  </label>
  <input
        type="text" 
        placeholder="Tools Name" 
        className="input input-bordered w-full max-w-xs" 
            {...register("name", {
                required: {
                    value: true,
                    message:"Name is Required"
            }
  })}/>
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
        


  </label>
</div>              
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Description</span>
    
  </label>
  <input
        type="text" 
        placeholder="Tools Name" 
        className="input input-bordered w-full max-w-xs" 
            {...register("description", {
                required: {
                    value: true,
                    message:"description is Required"
            }
  })}/>
    <label className="label">
        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
        


  </label>
</div>              
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Quantity</span>
    
  </label>
  <input
        type="text" 
        placeholder="Tools Name" 
        className="input input-bordered w-full max-w-xs" 
            {...register("quantity", {
                required: {
                    value: true,
                    message:"quantity is Required"
            }
  })}/>
    <label className="label">
        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
        


  </label>
</div>              
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Maximum Quantity</span>
    
  </label>
  <input
        type="text" 
        placeholder="Maximum Quantity" 
        className="input input-bordered w-full max-w-xs" 
            {...register("maxquantity", {
                required: {
                    value: true,
                    message:"quantity is Required"
            }
  })}/>
    <label className="label">
        {errors.maxquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.maxquantity.message}</span>}
        


  </label>
</div>              
{/* <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
    
  </label>
  <input
        type="email" 
        placeholder="Your Email" 
        className="input input-bordered w-full max-w-xs" 
            {...register("email", {
                required: {
                    value: true,
                    message:"Email is Required"
            },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Provide a Valid Email'
    }
  })}/>
    <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


  </label>
    </div> */}

{/* <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Specialty</span>
    
                    </label>
                    <select{...register('specialty')} className="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{ service.name}</option>)
                        }

</select>
  
    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


  </label>
                </div>  */}
                   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Photo</span>
    
  </label>
  <input
        type="file" 
         
        className="input input-bordered w-full max-w-xs" 
            {...register("image", {
                required: {
                    value: true,
                    message:"Photo is Required"
            }
  })}/>
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
        


  </label>
</div>  
    <input className='btn w-full max-w-xs' value="ADD" type="submit" />
                    </form>
        </div>
    );
};

export default AddTools;