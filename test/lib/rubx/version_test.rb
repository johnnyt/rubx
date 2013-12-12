require_relative '../../test_helper'

class TestVersion < MiniTest::Unit::TestCase

  def test_version
    refute Rubx::VERSION.nil?
  end

end
