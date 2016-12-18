var ContactForm = React.createClass({ 
  displayName: "ContactForm",
  
  sendToServer: function(formData){
    var data = JSON.stringify(formData);
    console.log(data);
    
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
  },

  handleSubmit: function(event){
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
    
  },
  

  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <h2>Contact Us</h2>
            <div className='form-entry'>
              <label>First Name:</label>
              <input type="text" />
            </div>
              
	          <div className='form-entry'>
	            <label>Last Name:</label>
              <input type="text" />
            </div>
            
            <div className='form-entry'>
              <label>Email:</label>
              <input type="text" />
            </div>
            
            <div className='form-entry'>
              <label>Message:</label>
              <textarea />
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
})
