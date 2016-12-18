class ContactController < ApplicationController
  def index
  end

  def create
    if request.xhr?
      contact = Contact.new(contact_params)
      if contact.save
        render :nothing => true, status: 200
      else
        render :json => { error: contact.errors.first }
      end
    else
      render :nothing => true, status: 400
    end
  end

  private

  def contact_params
    params.require(:contact).permit(
      :first_name, :last_name, :email, :message
      )
  end
end
