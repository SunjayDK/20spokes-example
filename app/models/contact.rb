class Contact < ActiveRecord::Base
	validates_presence_of :email, :message, :first_name, :last_name
	validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
end
