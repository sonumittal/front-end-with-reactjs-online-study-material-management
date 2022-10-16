import React from 'react'

export const Notification = () => {
    return (
        <div>
           {/*----------  content of notification middle section ------*/}
    <main class="container">

        <div className="align-items-center p-3 my-3 rounded shadow-sm well">
            <div class="row">
            <div class="col-sm-12  text-center" style={{marginTop:'20px'}}>
                 
                <h3 style={{textDecoration:'underline'}}>All News & Notifications</h3>
                <div class="mt-2">
                    <div class="panel-body" style={{minHeight:'400px',padding:'20px'}}>

                        <a href="" target="_blank">
                            <p style={{color:'#6B6B6B',fontWeight:'bold'}} >notification-1</p>
                        </a>
                        
                        <a href="" target="_blank">
                            <p style={{color:'#6B6B6B',fontWeight:'bold'}} >notification-2</p>
                        </a>

                        <a href="" target="_blank">
                            <p style={{color:'#6B6B6B',fontWeight:'bold'}} >notification-3</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
{/*---------end of notification content middle section ------*/}
        </div>
    )
}
