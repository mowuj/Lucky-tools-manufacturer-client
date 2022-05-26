import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>This is Blogs page</h2>
            <h2>How does prototypical inheritance work?</h2>
            <p> The Prototypal Inheritance is a feature in javascript
                used to add methods and properties in objects. It is a
                method by which an object can inherit the properties and
                methods of another object. Traditionally, in order to get
                and set the [[Prototype]] of an object, we use Object.
                getPrototypeOf and Object</p>
            
            <h2>What is a unit test? Why should write unit tests?</h2>
            <p>A unit test verifies the behavior of a unit of software in the
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
                4.Unit tests act as documentation.</p>
            
            <h2>What are the different ways to manage a state in a React application?</h2>
            <p>1.Communication State
                2.Data State
                3.Control State
                4.Session State
                5.Location State
            </p>

            <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>If you update it directly, calling the setState() afterward may just replace the update you made.
When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
You will lose control of the state across all components</p>
        </div>
    );
};

export default Blogs;