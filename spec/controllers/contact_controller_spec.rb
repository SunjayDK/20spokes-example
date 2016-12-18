require 'rails_helper'
require 'json'


describe ContactController do
    describe '#create' do
        
        let(:json_valid) { {
                first_name: 'Sunjay',
			    last_name: 'Kumar',
			    email: "sunjaydk@gmail.com",
			    message: "Yo what's up?"
            }
        }
        let(:json_invalid) { {
                first_name: 'Sunjay',
			    email: "sunjaydk@gmail.com",
			    message: "Yo what's up?"
            }
        }
        
        context 'valid input' do
            it "creates a new contact" do
              expect{
                xhr :post, :create, json_valid
              }.to change{Contact.count}.by(1)
            end
        end
        
        context 'invalid input' do
            it "does creates a new contact" do
              expect{
                xhr :post, :create, json_invalid
              }.to change{Contact.count}.by(0)
            end
            
            it "returns an error" do
                xhr :post, :create, json_invalid
                expect(response) 
            end
            
        end
    end
  end