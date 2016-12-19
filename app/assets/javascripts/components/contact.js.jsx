class ContactForm extends React.Component{ 

  constructor(props) {
    super(props);
   
    this.state = { contact:
      {
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      }
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
      $('#confirmation').removeClass("hidden");
      $('#submit-button').addClass("hidden");
    });
    
    promise.fail(function(jqXHR,  textStatus,  errorThrown) {
      alert("Please fill out the entire form.")
    });
  }



  handleSubmit(event) {
    event.preventDefault();
    console.warn('submit has been triggered');
    
    // Send state data to server
    this.sendToServer(this.state.contact);
    
  }
  
  // Changing each form input individually
  
  changeFirstName(event) {
    const contact = this.state.contact;
    contact.first_name = event.target.value;
    this.setState({contact: contact });
  }
  
  changeLastName(event) {
    const contact = this.state.contact;
    contact.last_name = event.target.value;
    this.setState({contact: contact });
  }
  
  changeEmail(event) {
    const contact = this.state.contact;
    contact.email = event.target.value;
    this.setState({contact: contact });
  }
  
  changeMessage(event) {
    const contact = this.state.contact;
    contact.message = event.target.value;
    this.setState({contact: contact });
  }
  
  // Rendering the whole form
  
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>
            <div className='form-group'>
              <label>First Name:</label>
              <input type="text" className="form-control" name="first_name" placeholder="Enter First Name Here" onChange={this.changeFirstName.bind(this)} value={this.state.contact.first_name} />
            </div>
              
	          <div className='form-group'>
	            <label>Last Name:</label>
              <input type="text" className="form-control" name="last_name" placeholder="Enter Last Name Here" onChange={this.changeLastName.bind(this)} value={this.state.contact.last_name} />
            </div>
            
            <div className='form-group'>
              <label>Email:</label>
              <input type="email" className="form-control" name="email" placeholder="Enter Email Here" onChange={this.changeEmail.bind(this)} value={this.state.contact.email} />
            </div>
            
            <div className='form-group'>
              <label>Message:</label>
              <textarea className="form-control input-lg" rows="3" name="message" placeholder="Enter Message Here" onChange={this.changeMessage.bind(this)} value={this.state.contact.message} />
            </div>
            
            <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
            
            <div className="actions">
              <button type="submit" id="submit-button" className="btn btn-block btn-primary">Submit</button>
            </div>
          </form>
          <div id="confirmation" className="hidden"><h2>Message submitted!</h2></div>
        </div>
      </div>
    )
  }
}
