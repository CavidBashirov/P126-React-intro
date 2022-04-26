import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Test1 from './Test1';

function TestF(props) {

    const {studentList,animal} = props;

    const list = [1,2,3,4,5];
    
    return (
        <div>
            <ListGroup>
                {
                    studentList.map(stu => (
                        <ListGroupItem>
                            {stu}
                        </ListGroupItem>
                    ))
                }

            </ListGroup>

            <p>{animal}</p>
            {
                list.map(item=>(

                    <span>{item}</span>

                ))
            }

            <Test1 list={list}/>
        
        </div>
    )
}

export default TestF
