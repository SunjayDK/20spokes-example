var ContactForm = React.createClass({ 
  displayName: "ContactForm",

  handleSubmit: function(event){
    event.preventDefault();
    console.warn('submit has been triggered');
    
    // Get data from form
    // Send data to server
    sendToServer(formData);
    
    
  },
  
  sendToServer: function(formData){
    var promise = $.ajax({
      url: '/contact',
      method: "POST",
      data: formData,
      dataType: 'JSON'
    });
    
    promise.done(function(){
      alert("Contact submitted!");
    });
    
    promise.fail(function(jqXHR,  textStatus,  errorThrown) {
      alert("Could not submit because" + errorThrown)
    });
  },

  render: function(){
    return (
      <div className="container">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
