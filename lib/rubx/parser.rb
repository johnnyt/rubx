module Rubx

  class Parser < Parslet::Parser
    rule(:zero) { str('0') }
    rule(:non_zero_integer) {
      (match['1-9'] >> match['0-9'].repeat)
    }

    rule(:integer) { (zero | non_zero_integer).as(:integer) }
  end

end
