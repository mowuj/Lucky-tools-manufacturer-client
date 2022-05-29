import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl text-center my-4'>My Blogs</h2>
            <div className='flex mx-8'>
                <div className='flex-1'>
                <h2 className='text-xl'>QUS 1: How does prototypical inheritance work?</h2>
            <p className='my-4'> The Prototypal Inheritance is a feature in javascript
                used to add methods and properties in objects. It is a
                method by which an object can inherit the properties and
                methods of another object. Traditionally, in order to get
                and set the [[Prototype]] of an object, we use Object.
                getPrototypeOf and Object</p>
            </div>
            
                <div className='flex-1'>
                    <h2 className='text-xl'>QUS 2: What is a unit test? Why should write unit tests?</h2>
            <p className='my-4'>A unit test verifies the behavior of a unit of software in the
                system. It verifies whether a small and isolated piece of the
                codebase called “unit” behaves as the developer intended.

                Unit tests verify the smallest parts or components of an application
                by comparing their actual behavior with the expected behavior in
                complete isolation. Here, “complete isolation” means that, during
                unit testing, devs do not connect the application with external
                dependencies such as databases, the filesystem, or HTTP services.
                This allows unit tests to be fast and stable since they won’t fail
                due to problems integrating with those external services.</p>

                <p>1.Unit tests help to find and fix bugs quickly and easily.
2.Unit tests contribute to higher code quality.
3.Unit tests contribute to better application architecture.
                4.Unit tests act as documentation.</p></div>
            </div>
            
            <div className='flex mx-8 my-8'>
                 <div className='flex-1'>
                <h2 className='text-xl'>QUS 3:  What are the different ways to manage a state in a React application?</h2>
            
                    <ul className='my-4'>
                        <li>1. Communication State</li>
                        <li>2. Data State</li>
                        <li>3. Control State</li>
                        <li>4. Session State</li>
                        <li>5. Location State</li>
                    </ul>
            </div>

            <div className='flex-1'>
                <h2 className='text-xl'>QUS 4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
            <p className='my-4'>If you update it directly, calling the setState() afterward may just replace the update you made.
When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
You will lose control of the state across all components</p>
            </div>
            </div>
            <div className='mx-8'>
          <h2 className='text-xl'>How will you improve the performance of a React Application?</h2>
          <p>Keeping component state local where necessary
Memoizing React components to prevent unnecessary re-renders
Code-splitting in React using dynamic import()
Windowing or list virtualization in React
Lazy loading images in React</p>
        </div>
        </div>
    );
};

export default Blogs;