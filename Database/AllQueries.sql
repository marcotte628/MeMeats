
-- queries --

-- register
	-- is username & email available
	select Username, Email from Accounts where username = @username OR email = @email

	-- save new user
	INSERT INTO [dbo].[Accounts]
           ([Username],[Password],[Email],[Phone]
           ,[Street],[Town],[State],[Zipcode]
           ,[NumReviews],[NumPoints],[Type],[Image])
     VALUES
           (@username,@password,@email,@phone,@street
		   ,@town,@state,@zipcode,0,0,@type,@image)
-- login
	-- does username/password combo exist
	select * from Accounts where username = @username AND password = @password

-- home 
	-- get all for sale items
	SELECT (select C.Name from Cuts C where C.CutID = F.CutID)
		,F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	-- get items where price between X Y
	SELECT (select C.Name from Cuts C where C.CutID = F.CutID)
		,F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	WHERE PricePerPound < @lowend AND PricePerPound > @highend
	-- get items by location
		-- need to have backend determine zip codes inside radius and use table parameter
	SELECT (select C.Name from Cuts C where C.CutID = F.CutID)
		,F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	WHERE Zipcode in @zipcodetable

	-- get items by specific cut
	declare @TGT int
	select @TGT = C.CutID from Cuts C where C.Name = @name
	Select @name, F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	WHERE F.CutID = @TGT

	-- get cuts who have famers with rating X and over
	SELECT (select C.Name from Cuts C where C.CutID = F.CutID)
		,F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	WHERE (A.NumPoints / A.NumReviews) >= @rating

-- buyer profile
	-- get all info with buyer with id X
	Select * from Accounts where UserID = @userid
	-- get all users followed by user X
	select

-- farmer profile
	-- get all info for farmer X
	Select * from Accounts where UserID = @userid

	-- get all users followed by user x
	select [Email],[Phone],[Street],[Town],[State],[Zipcode]
		  ,[NumReviews],[NumPoints],[Type],[Image],[Name]
	from Accounts A Where A.UserID In
	(SELECT [FollowedID]
	FROM [dbo].[Follows]
	WHERE UserID = @userID)

	-- get all for sale items for user x
		SELECT (select C.Name from Cuts C where C.CutID = F.CutID)
		,F.quantity, F.priceperpound, F.Image, A.Name
	FROM ForSaleItems F, Accounts A
	WHERE F.UserID = A.UserID

-- details 
	select * from ForSaleItems where ForSaleID = @itemID