USE [MeMeats]
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (1, N'alice', N'alice', N'alice@gmail.com', N'1234567890', N'123 central st', N'boston', N'MA', 1720, 5, 25, 0, NULL, N'alice')
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (2, N'bob', N'bob', N'bob@gmail.com', N'0987654321', N'58 wert st', N'boston', N'MA', 1720, 5, 25, 0, NULL, N'bob')
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (3, N'chuck', N'chuck', N'chuck@gmail.com', N'5872920476', N'11 hello st', N'boston', N'MA', 1720, 5, 20, 1, NULL, N'chuck')
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (5, N'dan', N'dan', N'dan@gmail.com', N'8888888888', N'33 byebye st', N'boston', N'MA', 1720, 5, 20, 1, NULL, N'dan')
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (6, N'eric', N'eirc', N'eric@gmail.com', N'7777777777', N'66 gymit st', N'boston', N'MA', 1720, 5, 20, 1, NULL, N'eric')
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (13, N'matt', N'matt', N'matt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([UserID], [Username], [Password], [Email], [Phone], [Street], [Town], [State], [Zipcode], [NumReviews], [NumPoints], [Type], [Image], [Name]) VALUES (16, N'larry', N'larry', N'larry@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[Cuts] ON 
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (1, N'Bottom Sirloin')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (2, N'Chuck')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (3, N'Plate')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (4, N'Round')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (5, N'Shank')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (6, N'Sirloin')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (7, N'Top Sirloin')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (8, N'Brisket')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (9, N'Short Loin')
GO
INSERT [dbo].[Cuts] ([CutID], [Name]) VALUES (10, N'Tenderloin')
GO
SET IDENTITY_INSERT [dbo].[Cuts] OFF
GO
INSERT [dbo].[Follows] ([UserID], [FollowedID], [RelationID]) VALUES (1, 3, NULL)
GO
INSERT [dbo].[Follows] ([UserID], [FollowedID], [RelationID]) VALUES (1, 4, NULL)
GO
INSERT [dbo].[Follows] ([UserID], [FollowedID], [RelationID]) VALUES (1, 5, NULL)
GO
INSERT [dbo].[Follows] ([UserID], [FollowedID], [RelationID]) VALUES (2, 1, NULL)
GO
INSERT [dbo].[Follows] ([UserID], [FollowedID], [RelationID]) VALUES (2, 5, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 1, 100, CAST(11.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 2, 100, CAST(22.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 3, 100, CAST(33.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 4, 100, CAST(12.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 5, 100, CAST(13.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 6, 100, CAST(13.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 7, 100, CAST(17.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 8, 100, CAST(18.11 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 9, 100, CAST(19.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (3, 10, 100, CAST(21.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (4, 1, 100, CAST(11.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (4, 2, 100, CAST(13.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (4, 3, 100, CAST(23.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (4, 4, 100, CAST(25.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (4, 5, 100, CAST(15.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (5, 6, 100, CAST(9.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (5, 7, 100, CAST(2.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (5, 8, 100, CAST(5.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (5, 9, 100, CAST(7.99 AS Decimal(6, 2)), NULL, NULL)
GO
INSERT [dbo].[ForSaleItems] ([UserID], [CutID], [quantity], [PricePerPound], [Image], [ForSaleID]) VALUES (5, 10, 100, CAST(3.99 AS Decimal(6, 2)), NULL, NULL)
GO
