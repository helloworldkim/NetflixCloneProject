import React, { Component } from 'react';

class Join extends Component {
    render() {
        return (
            <div style={{flex: 1}}>
                {/* <h1 style={{color: 'red' , marginTop: 10, marginLeft: 0, fontFamily: 'fantasy'}}>NETFLIX</h1> */}
                <div className='container' style={{justifyItems: 'center', alignItems: 'center', width: '500px', marginTop: '18vh'}}>
                    <div className='row'>
                        <div className='col'>
                        <div style={{margin: 20}}>
                            <p style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>이메일과 비밀번호를 설정하고 멤버십을 시작하세요.</p>
                            <p style={{color: 'white'}}>몇 단계만 더 거치면 Netflix 가입완료!<br/>복잡한 단계는 모두 없앴습니다.</p>
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <input id='email' placeholder='이메일 주소' type='text' className='form-control' style={{margin: 20}} />
                        <input id='password' placeholder='비밀번호를 추가하세요' type='password' className='form-control' style={{margin: 20}} />
                        <input id='name' placeholder='이름을 추가하세요' type='text' className='form-control' style={{margin: 20}} />
                        <button type='submit' className='btn btn-block' style={{margin: 20, backgroundColor:'red', color:'white', fontWeight:'bold'}}>다음</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Join;
