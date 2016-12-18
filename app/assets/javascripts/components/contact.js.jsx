class ContactForm extends React.Component{ 

  constructor(props) {
    super(props);
    var self = this;
    self.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
    
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
  
  handleFirstName(event) {
    self.setState({firstName: event.target.value});
  }
  
  handleLastName(event) {
    self.setState({lastName: event.target.value});
  }
  
  handleEmail(event) {
    self.setState({email: event.target.value});
  }
  
  handleMessage(event) {
    self.setState({message: event.target.value});
  }
  
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <h2>Contact Us</h2>
            <div className='form-entry'>
              <label>First Name:</label>
              <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />
            </div>
              
	          <div className='form-entry'>
	            <label>Last Name:</label>
              <input type="text" value={this.state.lastName} onChange={this.handleLastName} />
            </div>
            
            <div className='form-entry'>
              <label>Email:</label>
              <input type="text" value={this.state.email} onChange={this.handleEmail} />
            </div>
            
            <div className='form-entry'>
              <label>Message:</label>
              <textarea value={this.state.message} onChange={this.handleMessage} />
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
