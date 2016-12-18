var ContactForm = React.createClass({ 
  displayName: "ContactForm",

  handleSubmit: function(event){
    event.preventDefault();
    console.warn('submit has been triggered');
    
    //Submit to server and render success message to user
    
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
