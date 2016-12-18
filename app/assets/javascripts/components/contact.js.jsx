class ContactForm extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  sendToServer(formData) {
    var data = JSON.stringify(formData);
    
    var promise = $.ajax({
      url: '/contact',
      method: "POST",
      data: data,
      contentType: 'application/json',
      dataType: 'JSON'
    });
    
    promise.done(function(){
      alert("Contact submitted!");
    });
    
    promise.fail(function(jqXHR,  textStatus,  errorThrown) {
      alert("Could not submit because " + errorThrown)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.warn('submit has been triggered');
    
    // Get data from form
    console.log($(event.target));
    
    var formData = {
      first_name: 'Sunjay',
			email: "sunjaydk@gmail.com",
			message: "Yo what's up?"
    };
    
    // Send data to server
    this.sendToServer(formData);
    
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <h2>Contact Us</h2>
            <div className='form-entry'>
              <label>First Name:</label>
              <input type="text" value={"this.state.value"} onChange={this.handleChange} />
            </div>
              
	          <div className='form-entry'>
	            <label>Last Name:</label>
              <input type="text" value={"this.state.value"} onChange={this.handleChange} />
            </div>
            
            <div className='form-entry'>
              <label>Email:</label>
              <input type="text" value={"this.state.value"} onChange={this.handleChange} />
            </div>
            
            <div className='form-entry'>
              <label>Message:</label>
              <textarea value={"this.state.value"} onChange={this.handleChange} />
            </div>
            
            <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
            
            <div className="actions">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
