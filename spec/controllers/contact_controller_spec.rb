require 'rails_helper'
require 'json'


describe ContactController do
    describe '#create' do
        
        let(:json_valid) { {
                first_name: 'Sunjay',
			    last_name: 'Kumar',
			    email: "sunjaydk@gmail.com",
			    message: "Yo what's up?"
            }.to_json
        }
        let(:json_invalid) { {
                first_name: 'Sunjay',
			    email: "sunjaydk@gmail.com",
			    message: "Yo what's up?"
            }.to_json
        }
        
        it "creates a new contact" do
          expect{
            post :create, json_valid
          }.to change{Contact.count}.by(1)
        end
    end
  end