const Form = () => {
    return (
        <div className="form-container">
            <h1>Login Form</h1>
            <div className="main-layout">
                <div className="form-box">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" />
                    <label>Email</label>
                    <input type="text" placeholder="Enter email" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                    <label>Address</label>
                    <textarea placeholder="Enter address" rows="4"></textarea>
                    <button type="submit">submit</button>
                </div>
                <div className="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Data will appear here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Form;