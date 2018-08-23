USE [MeMeats]
GO

/****** Object:  Table [dbo].[ForSaleItems]    Script Date: 8/8/2018 7:12:19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ForSaleItems](
	[UserID] [bigint] NOT NULL,
	[CutID] [int] NOT NULL,
	[quantity] [int] NULL,
	[PricePerPound] [decimal](6, 2) NULL,
	[Image] [varbinary](max) NULL,
	[ForSaleID] [bigint] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


